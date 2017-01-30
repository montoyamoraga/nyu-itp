// =============================================================================
//
// Copyright (c) 2016 Andrew Lazarow <http://andrewlazarow.com>
//
// Permission is hereby granted, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to use during peformances of PRIVACY at the Public Theater.

//
// =============================================================================


#include "ofApp.h"


void ofApp::setup()
{
    ofSetLogLevel(OF_LOG_VERBOSE);
    ofSetFrameRate(4);
    loadCameras();
    
    //----------For Syphon
    mainOutputSyphonServer.setName("IP_Cameras");
    
    // initialize connection
    for (std::size_t i = 0; i < NUM_CAMERAS; i++)
    {
        IPCameraDef& cam = getNextCamera();
        
        auto grabber = std::make_shared<Video::IPVideoGrabber>();
        
        if (cam.getAuthType() == IPCameraDef::AuthType::COOKIE)
        {
            // Depending on the system, the cookie name may need to be changed.
            grabber->setCookie("user", cam.getUsername());
            grabber->setCookie("password", cam.getPassword());
        }
        else if (!cam.getUsername().empty() || !cam.getPassword().empty())
        {
            grabber->setUsername(cam.getUsername());
            grabber->setPassword(cam.getPassword());
        }
        
        grabber->setCameraName(cam.getName());
        grabber->setURI(cam.getURL());
        grabber->connect(); // connect immediately
        
        // if desired, set up a video resize listener
        ofAddListener(grabber->videoResized, this, &ofApp::videoResized);
        
        grabbers.push_back(grabber);
        
        
    }
}


IPCameraDef& ofApp::getNextCamera()
{
    nextCamera = (nextCamera + 1) % ipcams.size();
    //nextCamera = nextCamera + 1;
    return ipcams[nextCamera];
}

IPCameraDef& ofApp::getThisCamera(int x)
{
    thisCamera = x % ipcams.size();
    return ipcams[thisCamera];
}


void ofApp::loadCameras()
{
    
    
    // to define a camera with a username / password
    //ipcams.push_back(IPCameraDef("http://148.61.142.228/axis-cgi/mjpg/video.cgi", "username", "password"));
    
    ofLog(OF_LOG_NOTICE, "---------------Loading Streams---------------");
    
    ofxXmlSettings XML;
    
    if (XML.loadFile("streams.xml"))
    {
        XML.pushTag("streams");
        std::string tag = "stream";
        
        std::size_t nCams = static_cast<std::size_t>(XML.getNumTags(tag));
        
        for (std::size_t n = 0; n < nCams; ++n)
        {
            std::string username = XML.getAttribute(tag, "username", "", n);
            std::string password = XML.getAttribute(tag, "password", "", n);
            
            std::string auth = XML.getAttribute(tag, "auth-type", "NONE", n);
            
            IPCameraDef::AuthType authType = IPCameraDef::AuthType::NONE;
            
            if (auth.compare("NONE") == 0)
            {
                authType = IPCameraDef::AuthType::NONE;
            }
            else if (auth.compare("BASIC") == 0)
            {
                authType = IPCameraDef::AuthType::BASIC;
            }
            else if (auth.compare("COOKIE") == 0)
            {
                authType = IPCameraDef::AuthType::COOKIE;
            }
            
            IPCameraDef def(XML.getAttribute(tag, "name", "", n),
                            XML.getAttribute(tag, "url", "", n),
                            username,
                            password,
                            authType);
            
            
            std::string logMessage = "STREAM LOADED: " + def.getName() +
            " url: " +  def.getURL() +
            " username: " + def.getUsername() +
            " password: " + def.getPassword() +
            " auth: " + std::to_string(static_cast<int>((def.getAuthType())));
            
            ofLogNotice() << logMessage;
            
            ipcams.push_back(def);
            
        }
        
        XML.popTag();
        
    }
    else
    {
        ofLog(OF_LOG_ERROR, "Unable to load streams.xml.");
    }
    
    ofLog(OF_LOG_NOTICE, "-----------Loading Streams Complete----------");
    
    nextCamera = ipcams.size();
}


void ofApp::videoResized(const void* sender, ofResizeEventArgs& arg)
{
    // Find the camera that sent the resize event changed.
    for (std::size_t i = 0; i < NUM_CAMERAS; ++i)
    {
        if (sender == grabbers[i].get())
        {
            std::stringstream ss;
            ss << "videoResized: ";
            ss << "Camera connected to: " << grabbers[i]->getURI() + " ";
            ss << "New DIM = " << arg.width << "/" << arg.height;
            ofLogVerbose("ofApp") << ss.str();
        }
    }
}


void ofApp::update()
{
    

    
    //---------------- update the cameras
    
    
    for (std::size_t i = 0; i < grabbers.size(); ++i)
    {
        
        
        grabbers[i]->update();
    }

    
    
     
}


void ofApp::draw()
{
    
    //-------- For Syphon
    //Clear with alpha, so we can capture via syphon and composite elsewhere should we want.
    //glClearColor(0.0, 0.0, 0.0, 0.0);
    //glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    
    //ofBackground(0,0,0);
    
    //ofSetHexColor(0xffffff);
    
    int row = 0;
    int col = 0;
    
    int x = 0;
    int y = 0;
    
    int w = ofGetWidth() / NUM_COLS;
    int h = ofGetHeight() / NUM_ROWS;
    
    
    for (std::size_t i = 0; i < grabbers.size(); ++i)
    {
        x = col * w;
        y = row * h;
        
        // draw in a grid
        row = (row + 1) % NUM_ROWS;
        
        if (row == 0)
        {
            col = (col + 1) % NUM_COLS;
        }
        
        ofPushMatrix();
        ofTranslate(x,y);
        ofSetColor(255,255,255,255);
        grabbers[i]->draw(0,0,w,h); // draw the camera
        
        //ofEnableAlphaBlending();
        
        
        
        
        ofPopMatrix();
    }
   
    refreshCounter=refreshCounter+1;
    
    updateTrafficCameras ();
    
    
    //------------For SYPHON publishes screen
    mainOutputSyphonServer.publishScreen();
}


//---------------Update Cam function
void ofApp::updateTrafficCameras () {
    
    if ( refreshCounter==1) {
        
        
        //------------MY ADD.
        // initialize connection
        for (std::size_t i = 0; i < NUM_CAMERAS; ++i)
        {
            ofRemoveListener(grabbers[i]->videoResized, this, &ofApp::videoResized);
            auto c = std::make_shared<Video::IPVideoGrabber>();
            
            IPCameraDef & cam = getThisCamera(i);
            //IPCameraDef & cam = [3];
            
            
            //IPCameraDef& cam = getNextCamera();
            c->setUsername(cam.getUsername());
            c->setPassword(cam.getPassword());
            Poco::URI uri(cam.getURL());
            c->setURI(uri);
            c->connect();
            
            grabbers[i] = c;
            
            
            
            
        }
    }
   
    if ( refreshCounter==4) {
        
                refreshCounter=0;
        
    }
    
    
    
}


void ofApp::keyPressed(int key)
{
    if (key == ' ')
    {
        // initialize connection
        for (std::size_t i = 0; i < NUM_CAMERAS; ++i)
        {
            ofRemoveListener(grabbers[i]->videoResized, this, &ofApp::videoResized);
            auto c = std::make_shared<Video::IPVideoGrabber>();
            
            IPCameraDef & cam = getThisCamera(i);
            //IPCameraDef & cam = [3];
            
            
            //IPCameraDef& cam = getNextCamera();
            c->setUsername(cam.getUsername());
            c->setPassword(cam.getPassword());
            Poco::URI uri(cam.getURL());
            c->setURI(uri);
            c->connect();
            
            grabbers[i] = c;
            
            
            
            
        }
    }
}

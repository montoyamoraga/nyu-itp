// =============================================================================
//
// Copyright (c) 2016 Andrew Lazarow <http://andrewlazarow.com>
//
// Permission is hereby granted, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to use during peformances of PRIVACY at the Public Theater.

//
// =============================================================================


#pragma once


#include "ofMain.h"
#include "ofxXmlSettings.h"
#include "IPVideoGrabber.h"
#include "ofxSyphon.h"


//#if defined(TARGET_OF_IPHONE) || defined(TARGET_ANDROID) || defined(TARGET_LINUX_ARM)

//THIS is where you set the number of cameras and the number of rows and columns.
//Each will auto size to fit the spec here.
#define NUM_CAMERAS 1
#define NUM_COLS 1
#define NUM_ROWS 1

//#else
//    #define NUM_CAMERAS 9
//    #define NUM_ROWS 3
//    #define NUM_COLS 3
//#endif


class IPCameraDef
{
public:
    enum AuthType {
        NONE,
        BASIC,
        COOKIE
    };
    
    IPCameraDef()
    {
    }
    
    IPCameraDef(const std::string& url): _url(url)
    {
    }
    
    IPCameraDef(const std::string& name,
                const std::string& url,
                const std::string& username,
                const std::string& password,
                const AuthType authType):
    _name(name),
    _url(url),
    _username(username),
    _password(password),
    _authType(authType)
    {
    }
    
    
    void setName(const std::string& name) { _name = name; }
    std::string getName() const { return _name; }
    
    void setURL(const std::string& url) { _url = url; }
    std::string getURL() const { return _url; }
    
    void setUsername(const std::string& username) { _username = username; }
    std::string getUsername() const { return _username; }
    
    void setPassword(const std::string& password) { _password = password; }
    std::string getPassword() const { return _password; }
    
    void setAuthType(AuthType authType) { _authType = authType; }
    AuthType getAuthType() const { return _authType; }
    
private:
    std::string _name;
    std::string _url;
    std::string _username;
    std::string _password;
    AuthType _authType = NONE;
};


using namespace ofx;


class ofApp: public ofBaseApp
{
public:
    void setup();
    void update();
    void draw();
    
    void keyPressed(int key);
    
    std::vector<std::shared_ptr<Video::IPVideoGrabber>> grabbers;
    
    void loadCameras();
    IPCameraDef& getNextCamera();
    std::vector<IPCameraDef> ipcams; // a list of IPCameras
    std::size_t nextCamera;
    IPCameraDef& getThisCamera(int x);
    std::size_t thisCamera;
    
    //--------MY WORK
    int refreshCounter = 0;
    //--------------For Syphon
    ofTexture tex;
    
    ofxSyphonServer mainOutputSyphonServer;
    
    //---------------My add test
    void updateTrafficCameras();
    
    
    // This message occurs when the incoming video stream image size changes.
    // This can happen if the IPCamera has a single broadcast state (some cheaper IPCams do this)
    // and that broadcast size is changed by another user.
    void videoResized(const void* sender, ofResizeEventArgs& arg);
    
};

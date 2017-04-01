#code by sam lavinge, done in class
#february 2017

#import PIL module
from PIL import Image, ImageDraw, ImageFont

def drawtext(filename, text):

    #open the original image
    im = Image.open(filename + ".jpg")

    #canvas element is an instace of ImageDraw
    canvas = ImageDraw.Draw(im)

    #fnt element is an instance of ImageFont
    fnt = ImageFont.truetype('./Comic_Sans_MS.ttf', 500)

    #textcoordinates((x, y), text, color, font)
    canvas.text((200, 700), text, fill=(255, 0, 0), font=fnt)

    im.save(filename + ".png")

drawtext('wip', "fuego")

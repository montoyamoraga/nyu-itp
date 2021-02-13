void fillPix() {
  for (int i = 0; i < pixLength; i++) {
    readCamera();
    PImage aux = get();
    aux.save(currentDate + "/" + i+".jpg");
    delay(delayTime);
  }
}

void displayNext() {
  PImage displayed = loadImage(currentDate + "/" + pixDisplayed + ".jpg");
  image(displayed, 0, 0);
  delay(delayTime);

  if (forwards == true) {
    pixDisplayed = (pixDisplayed + 1);

    if (pixDisplayed == pixLength - 1) {
      forwards = false;
    }
  } else {
    pixDisplayed = (pixDisplayed - 1);
    if (pixDisplayed == 0) {
      forwards = true;
    }
  }
}
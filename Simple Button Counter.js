var counter = 0;

setWatch(() => {
  counter++; // adds 1 to counter var
  g.clear();
  g.setFontAlign(0,0); // center font
  g.setFont("6x8",2); // bitmap font, 8x magnified
  g.drawString(counter, g.getWidth()/2, g.getHeight()/2); // draw the current counter value in the center of the screen
  Bangle.setLCDPower(1); // optional - this keeps the watch LCD lit up
}, BTN1, {repeat:true});

class Segment{
	constructor(xOff,yOff,w,h,shift,color){
		this.xOff = xOff;
		this.yOff = yOff;
		this.w = w;
		this.h = h;

		this.shift = shift;

		this.color = color || 255;
		this.on = true;

		this.hasChanged = true;
	}

	setOn(val){
		this.on = val;
	}

	show(x,y){
		if(this.on){
			push();
			fill(this.color);
			rect(x+this.xOff, y+this.yOff, this.w, this.h, 10, 10);
			pop();
		}
	}
}
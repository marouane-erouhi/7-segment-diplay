let nums = [0x7E,0x30,0x6D,0x79,0x33,0x5B,0x5F,0x70,0x7F,0x7B,0x77,0x1F,0x4E,0x3D,0x4F,0x47];
let index = 0;
let sevenSeg;

function setup() {
	createCanvas(800, 800);
	frameRate(2);
	sevenSeg = new SevenSegment(0x7E,400,400);
}

function draw() {
	background(173);
	index = (index + 1) % nums.length;

	sevenSeg.setValue(nums[index]);
	sevenSeg.show();
}

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

class SevenSegment{
	constructor(value, x,y){
		this.value = value;
		this.x = x;
		this.y = y;
		this.segments = [];
		this.construct();
	}
	construct(){
		this.segments.push(new Segment(-40,-130,78,18,6));// A
		this.segments.push(new Segment(40,-110,18,98,5));// B
		this.segments.push(new Segment(40,10,18,98,4));// C
		this.segments.push(new Segment(-40,110,78,18,3));// D
		this.segments.push(new Segment(-60,10,18,98,2));// E
		this.segments.push(new Segment(-60,-110,18,98,1));// F
		this.segments.push(new Segment(-40,-10,78,18,0));// G
	}
	setValue(newVal){
		this.value = newVal;
		this.hasChanged = true;
	}

	getState(val,shift){
		return ((val >> shift) & 1);
	}

	show(){
		for(let seg of this.segments){
			if(this.hasChanged)
				seg.setOn(this.getState(this.value, seg.shift));
			seg.show(this.x,this.y);
		}
		if(this.hasChanged)	this.hasChanged = false;
		ellipse(this.x, this.y, 5);
	}
}

class NumberGroup{
	constructor(x,y,value){
		this.x = x;
		this.y = y;
		this.value = value;
		this.digits = [];
		generateDigits();
	}
	generateDigits(){
		let length = (''+this.value).length;
		this.digits = [];
		for(let i =0; i<length;i++){
			this.digits.push(
				
			);
		}
	}
}
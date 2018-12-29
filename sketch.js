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
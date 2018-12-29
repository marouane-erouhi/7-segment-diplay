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
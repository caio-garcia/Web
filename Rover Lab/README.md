# Rover Lab

On this Lab, I am developing a tool where users can move a rover (like NASA's one) around a 10x10 grid.

### Commands
You can move rover around baed on the following commands

1. Directions:

You should set Rover's direction before moving it *forwards* or *backwards*:

a) **R** for turning it *Right*;

b) **L** for turning it *Left*.

Console will tell you what direction is Rover is facing after turning it (default direction is North).

2. Moving off:

You may move rover forwards or backwards:

a) **F** for *Forward*;

b) **B** for *Backward*.

3. Example of Command:

*RRFFLB*

That is:

	a) Turn Right;
	b) Right again;
	c) Moving Forward;
	d) Forward again;
	e) Turning Left;
	f) Then moving Backwards

4. Final Notes:

You won't be able to move off the 10x10 grid (be careful!);
At the end of the command processing, console will display rover's final positions as well as its full travel history on a coordinate basis *(x;y)*.

I have also included some obstacles! Would you be able to find all of them?

graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;

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

gantt
dateFormat  YYYY-MM-DD
title Adding GANTT diagram to mermaid
excludes weekdays 2014-01-10

section A section
Completed task            :done,    des1, 2014-01-06,2014-01-08
Active task               :active,  des2, 2014-01-09, 3d
Future task               :         des3, after des2, 5d
Future task2               :         des4, after des3, 5d

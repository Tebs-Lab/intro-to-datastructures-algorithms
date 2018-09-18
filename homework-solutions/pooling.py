# rainfall psudocode:

max_left = 0
unprocessed_stack = Stack()
pooled_water = 0

for column in columns:
  # New max always requires a flush
  if column > max_left:
    while stack.length > 0:
      current = stack.pop()
      pooled_water += max_left - current

    max_left = current

  # Otherwise, if we found something OTHER than a new max
  else:
    stack.push(column)

# finally, we've flushed all the intermediates that we can.
# Now we need to handle the trailing space which is not bounded
# on the right side by something equally as tall

max_right = column # as in, the last value that column was
while stack.length > 0:
  current = stack.pop()

  # Finding a bigger max_right means water to the right of this
  # must spill out of the total structure.
  if current > max_right:
    max_right = current;

  # Otherwise, the amount of pooled water can be added
  else:
    pooled_water += max_right - current;

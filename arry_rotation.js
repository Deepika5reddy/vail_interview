

function arrayrotation(arr,position)
{
const length = arr.length;
 if (length === 0)
 {
    console.log('Empty array, Enter valid array')
    return;
 }
  if (position < 0)
  {
    console.log('Enter valid position to shift');
    return;
  }
  console.log("Original Array:"+arr);
  console.log("Length of array:" +length);
  console.log('How many position to rotate:'+position);
  const rotation = position % arr.length; // gives the rotating times 2 % 8 = 2
  // arr.slice(rotation) gives the part after the rotated section [3,4,5,6,7,8].
  // arr.slice(0,rotation) gets the rotated-out part.
  //.concat joins both
  const rotated_array = arr.slice(rotation).concat(arr.slice(0,rotation))
  console.log ('Rotated Array :' +rotated_array);
  return rotated_array;
}

arrayrotation([1,2,3,4,5,6,7],2);
arrayrotation([1,2,3,4,5,6,7],0);
arrayrotation([1,2,3,4,5,6,7],8);
arrayrotation([1,2,3,4,5,6,7],-1); 


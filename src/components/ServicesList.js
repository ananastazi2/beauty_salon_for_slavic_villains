let currentWidth;
const tabletWidth = 800;


function getIndex(i) {
  if (width < tabletWidth) {
    if (i % 3 === 1) 
      return i + 1;
    if (i % 3 === 2)
      return i - 1;
    return i;
  }
}

function Component() {
  const [width] = useWindowSize();
  useEffect(() => {
    currentWidth = width;
  }, [width]);

  return (
    <div>
      {list.map((el, i) => (
          <div class='item'> 

          </div>
        )
      )}
    </div>
  )
}
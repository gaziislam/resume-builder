import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import { Resume1comp } from "./Resume1comp";
import { Resume2comp } from "./Resume2comp";
import { Resume3comp } from "./Resume3comp";

function Resume1() {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <button onClick={handlePrint}>Print this out!</button>
      {/* <Resume1comp ref={componentRef} /> */}
      {/* <Resume2comp ref={componentRef} /> */}
      <Resume3comp ref={componentRef} />
    </div>
  );
}

export default Resume1;

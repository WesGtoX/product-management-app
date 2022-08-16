import React, { SyntheticEvent, useState } from "react";
import { Redirect } from "react-router-dom";

import Wrapper from "./Wrapper";

const ProductsCreate = () => {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [redirect, setRedirect] = useState(false)


  const submit = async (e: SyntheticEvent) => {
    e.preventDefault()
    
    await fetch("http://localhost:8000/api/products", {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ title, image })
    });

    setRedirect(true)
  }
  
  if (redirect) {
    return <Redirect to={"/admin/products"} />
  }

  return (
    <Wrapper>
      <form onSubmit={submit}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" name="title" onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input type="text" className="form-control" name="image" onChange={e => setImage(e.target.value)} />
          { image && <img src={image} className="rounded img-thumbnail mt-2" height="250" /> }
        </div>
        <button className="btn btn-outline-secondary">Save</button>
      </form>
    </Wrapper>
  );
};

export default ProductsCreate;

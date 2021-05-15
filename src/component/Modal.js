import React from "react";
import ReactDom, { createPortal } from "react-dom"
import "./Modal.css";

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
      <div className="allParent">
    <div onClick={onClose} className="overlay" />
    <div className="blur">
    <div  className="modal">
        <p className="x" style={{cursor:"pointer"}} onClick={onClose}>X</p>
        <h1 className="loginMessage">{children}</h1>
      </div>
    </div>
      
      </div>,
    document.getElementById("portal")
  );
}

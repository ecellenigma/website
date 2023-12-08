'use client'
import React from 'react';
import Image from 'next/image';
import {useState, useEffect} from 'react'

const GallerySection = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [galleryPos, setGalleryPos] = useState({ x: 0, y: 0 });
    const [galleryBounds, setGalleryBounds] = useState({ top: 0, right: 0, bottom: 0, left: 0 });
    const [galleryOffset, setGalleryOffset] = useState({ x: 0, y: 0 });
    const [galleryTransform, setGalleryTransform] = useState('translate(-50%, -50%)');
    const [picturePositions, setPicturePositions] = useState({ left: '50%', top: '50%' });
  
    useEffect(() => {
      const gallery = document.getElementById('gallery-box');
  
      const calcOffset = () => {
        const newX = mousePos.x - galleryPos.x;
        const invertedX = invertValue(newX) / 2;
        const newY = mousePos.y - galleryPos.y;
        const invertedY = invertValue(newY);
  
        setGalleryOffset({ x: invertedX, y: invertedY });
      };
  
      const calcPercentage = () => {
        const horizontal = ((mousePos.x - galleryBounds.left) / gallery.width) * 100;
        const vertical = ((mousePos.y - galleryBounds.top) / gallery.height) * 100;
        return { h: horizontal, v: vertical };
      };
  
      const move = () => {
        const newX = galleryOffset.x;
        const newY = galleryOffset.y;
  
        setGalleryTransform(`translate(-50%, -50%) translate(${newX}px, ${newY}px)`);
      };
  
      const parallaxPics = () => {
        const percentages = calcPercentage();
  
        setPicturePositions({
          left: `${100 - percentages.h}%`,
          top: `${100 - percentages.v}%`,
        });
      };
  
      const invertValue = (num) => {
        return Math.sign(num) === 1 ? -Math.abs(num) : Math.abs(num);
      };
  
      const handleMouseMove = (e) => {
        setMousePos({ x: e.pageX, y: e.pageY });
        calcOffset();
        move();
        parallaxPics();
      };
  
      const handleMouseLeave = () => {
        setGalleryOffset({ x: 0, y: 0 });
        setGalleryTransform('translate(-50%, -50%)');
        resetPicturePositions();
      };
  
      const resetPicturePositions = () => {
        setPicturePositions({ left: '50%', top: '50%' });
      };
  
      setGalleryPos({
        x: gallery.offsetLeft + gallery.offsetWidth / 2,
        y: gallery.offsetTop + gallery.offsetHeight / 2,
      });
  
      setGalleryBounds({
        top: gallery.offsetTop,
        right: gallery.offsetLeft + gallery.offsetWidth,
        bottom: gallery.offsetTop + gallery.offsetHeight,
        left: gallery.offsetLeft,
      });
  
      gallery.addEventListener('mousemove', handleMouseMove);
      gallery.addEventListener('mouseleave', handleMouseLeave);
  
      return () => {
        gallery.removeEventListener('mousemove', handleMouseMove);
        gallery.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, [mousePos, galleryPos, galleryBounds, galleryOffset, galleryTransform, picturePositions]);

  return (
    <div className='flex items-center justify-center mb-10'>
      <div id="gallery-box">
        <div className="gallery" style={{ transform: galleryTransform }} data-offset-y={galleryOffset.y} data-offset-x={galleryOffset.x}>
          <div className="row">
            <div className="item nr1">
              <Image
                src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                width="356"
                height="240"
                alt=""
              />
            </div>
            <div className="item nr2">
              <Image
                src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=710&q=80"
                width="294"
                height="240"
                alt=""
              />
            </div>
            <div className="item nr3">
              <Image
                src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                width="495"
                height="240"
                alt=""
              />
            </div>
            <div className="item nr4">
              <Image
                src="https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                width="371"
                height="240"
                alt=""
              />
            </div>
          </div>

          <div className="row">
            <div className="item nr5">
              <Image
                src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                width="597"
                height="240"
                alt=""
              />
            </div>
            <div className="item nr6">
              <Image
                src="https://images.unsplash.com/photo-1580959375944-abd7e991f971?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                width="306"
                height="240"
                alt=""
              />
            </div>
            <div className="item nr7">
              <Image
                src="https://images.unsplash.com/photo-1587015566802-5dc157c901cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80"
                width="274"
                height="240"
                alt=""
              />
            </div>
            <div className="item nr8">
              <Image
                src="https://images.unsplash.com/photo-1610440042657-612c34d95e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                width="323"
                height="240"
                alt=""
              />
            </div>
          </div>

          <div className="row">
            <div className="item nr9">
              <Image
                src="https://images.unsplash.com/photo-1606149059549-6042addafc5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                width="303"
                height="240"
                alt=""
              />
            </div>
            <div className="item nr10">
              <Image
                src="https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                width="255"
                height="240"
                alt=""
              />
            </div>
            <div className="item nr11">
              <Image
                src="https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                width="479"
                height="240"
                alt=""
              />
            </div>
            <div className="item nr12">
              <Image
                src="https://images.unsplash.com/photo-1539252554453-80ab65ce3586?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                width="479"
                height="240"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;

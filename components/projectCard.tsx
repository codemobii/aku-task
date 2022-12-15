/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function ProjectCard(props: {
  title: string;
  category: string;
  image: string;
  time: string;
}) {
  return (
    <div className="shadow-md w-full rounded-md border border-border">
      <div className="p-4">
        <div className="flex items-center">
          <img
            className="flex items-center rounded-full justify-center h-10 w-10"
            src={props.image}
            alt=""
          />

          <div className="ml-4">
            <h1 className="text-sm font-semibold">{props.title}</h1>
            <p className="text-xs text-text font-medium">{props.category}</p>
          </div>
        </div>

        <p className="text-sm mt-4 text-text">{props.time}</p>
      </div>

      <div className="border border-border"></div>

      <div className="flex justify-end p-4">
        <a className="text-sm text-primary font-medium">View project</a>
      </div>
    </div>
  );
}

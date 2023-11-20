import React from "react";

const LiveSessionsDropdown = () => {
  return (
    <div className="absolute top-[50px] flex flex-col overflow-hidden whitespace-nowrap rounded-lg bg-white bg-opacity-100 px-1.5 py-2 text-slate-800 shadow-lg laptop:-left-5 desk:-left-6">
      <div className="rounded-md p-2 hover:bg-brand-100">
        <span className="font-en svelte-t3mcl">Bhagavad Gita</span>
      </div>
      <div className="rounded-md p-2 hover:bg-brand-100">
        <span className="font-en svelte-t3mcl">Sant Sarita</span>
      </div>
      <div className="rounded-md p-2 hover:bg-brand-100">
        <span className="font-en svelte-t3mcl">Vedant Samhita</span>
      </div>
      <div className="rounded-md p-2 hover:bg-brand-100">
        <span className="font-en svelte-t3mcl">Bodh Pratyusha</span>
      </div>
    </div>
  );
};

export default LiveSessionsDropdown;

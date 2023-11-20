import React from 'react'

function InviteDropdown() {
    return (
      <div className="absolute top-[50px] flex flex-col overflow-hidden whitespace-nowrap rounded-lg bg-white bg-opacity-100 px-1.5 py-2 text-slate-800 shadow-lg laptop:-left-5 desk:-left-6">
        <div className="rounded-md p-2 hover:bg-brand-100">
          <span className="font-en svelte-t3mcl">For a talk</span>
        </div>
        <div className="rounded-md p-2 hover:bg-brand-100">
          <span className="font-en svelte-t3mcl">For an interview</span>
        </div>
      </div>
    );
}

export default InviteDropdown

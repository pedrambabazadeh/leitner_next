"use client";

import React from 'react'

function Error({ error }) {
    return (
      <div className="text-red-600">
        <h2>Error loading dashboard</h2>
        <p>{error.message}</p>
      </div>
    );
}

export default Error
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function HomePage() {
  const {
    talks = [],
    users = [],
    authUser,
  } = useSelector((states) => states);
}

const dispatch = useDispatch();

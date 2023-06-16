import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SET_NAME } from '../redux/reducers/profile';

import Pricing from '../components/Pricing';
import TicketPrompt from '../components/TicketPrompt';

export default function Eventtickets() {
  const name = useRef();
  const dispatch = useDispatch();

  const [data, setData] = useState(null);
  // const [isLoading, setLoading] = useState(false);
  const [inputName, setInputName] = useState('');
  const [nameAdded, setNameAdded] = useState(false);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   // setLoading(true);
  //   fetch('/api/tickets')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       // setLoading(false);
  //     });
  // }, []);

  // function setName() {
  //   const enteredName = name.current.value;
  //   console.log('name ::::', name.current.value);

  //   if (inputName.length >= 2) {
  //     dispatch(SET_NAME(enteredName));
  //     setNameAdded(true);
  //   } else {
  //     setError(true);
  //   }
  // }

  // const { user } = useSelector((state) => state.profile);
  // const userName = user;
  // console.log(userName);

  return (
    <>
      <main className="min-h-screen flex-col justify-center items-center bg-zinc-400">
      <Pricing />
        {/* {nameAdded ? (
          <Pricing admTix={data} userName={userName} />
        ) : (
          <TicketPrompt
            refr={name}
            setName={setName}
            setInputName={setInputName}
            inputName={inputName}
            error={error}
          />
        )} */}
      </main>
    </>
  );
}

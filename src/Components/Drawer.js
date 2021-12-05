import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import widgetSlice from '../Reducer/widgetSlice';
import http from '../http';

const Drawer = ({ isOpen, setIsOpen }) => {
    const dispatch = useDispatch();

    const widgets = useSelector(state => state.widgets.widgets);

    const { widgetsLoading, widgetsReceived } = widgetSlice.actions;

    const fetchWidgets = () => async dispatch => {
        dispatch(widgetsLoading());
        const response = await http.get('/widgets');
        dispatch(widgetsReceived(response.data));
    }

    useEffect(() => {
        dispatch(fetchWidgets());
    }, []);

    console.log(widgets);

    if (widgets.length === 0) {
        return <div>Loading...</div>
    }

    return (
        <main
            className={
                " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
                (isOpen
                    ? " transition-opacity opacity-100 duration-500 translate-x-0  "
                    : " transition-all delay-500 opacity-0 translate-x-full  ")
            }
        >
            <section
                className={
                    " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
                    (isOpen ? " translate-x-0 " : " translate-x-full ")
                }
            >
                <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
                    <header className="p-4 font-bold text-lg">Widgets</header>

                </article>
            </section>
            <section
                className=" w-screen h-full cursor-pointer "
                onClick={() => {
                    setIsOpen(false);
                }}
            ></section>
        </main>
    );
}

export default Drawer;

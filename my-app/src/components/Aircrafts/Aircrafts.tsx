import s from './Aircrafts.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import AircraftWidget from './AircraftWidget/AircraftWidget';
import { compose } from 'redux';
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import { getAircrafts, IAircraft } from '../../store/reducers/aircraftReducer';
import { useEffect, useState } from 'react';
import AircraftForm from './AircraftForm/AircraftForm';
import Header from '../Header/Header';
import cross from './../../assets/img/png/cross.png'
import Button from '../../common/buttons/Button';
import { useNavigate } from 'react-router-dom';

export interface IAircraftFile {
    show: boolean;
    msn: string;
}

const Aircrafts = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const aircrafts = useSelector((state: any) => state.aircraft.aircrafts);
    const [aircraftFile, setAircraftFile] = useState<IAircraftFile>({ show: false, msn: '' })
    const [addForm, setAddForm] = useState<boolean>(false)
    useEffect(() => {
        dispatch(getAircrafts())
    }, [])

    const aircraftsWidgets = () => {
        if (!aircrafts) return
        return aircrafts.map((aircraft: IAircraft) => {
            return (
                <AircraftWidget key={aircraft._id} aircraft={aircraft} onClick={setAircraftFile} />
            )
        })
    }

    return (
        <div className={s.aircrafts}>
            <div className={s.background__circle}></div>
            <div className={s.aircrafts__container}>
                <Header />
                <div className={s.main}>
                    <div className={s.main__aircrafts} >
                        {aircraftsWidgets()}
                        {addForm ? <AircraftForm setAddForm={setAddForm} /> : null}
                        <div className={s.widget} onClick={() => setAddForm(true)} >

                            <div className={s.widget__btns} >
                            </div>
                            <img className={s.widget__cross__img} src={cross} alt="plane-icon" />
                        </div>
                    </div>
                    <Button text='Back' color='white__dark' btnType='button' handler={() => navigate("/dashboard")} />
                </div>
            </div>
        </div>
    )
}



export default compose(withAuthRedirect)(Aircrafts);
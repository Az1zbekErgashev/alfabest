import * as React from 'react';
import { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import LanguageContext from './useContext/LanguageContext';
export default function AlertDialog(props) {
    let bool = props.data
    const [open, setOpen] = useState(bool);
    const { language, changeLanguage } = useContext(LanguageContext);

    function run(){
        setOpen(props.data)
    }

    React.useEffect(()=>{
        run()
    },[bool])

    
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className='d-flex align-items-center justify-content-between w-100'>
                    <DialogTitle id="alert-dialog-title">

                    </DialogTitle>
                    <Button onClick={handleClose} autoFocus>
                        <i className='bi bi-x-lg fw-bold IconAlertClose m-2'></i>
                    </Button>
                </div>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description DialogBody ">
                        <h3 className='DialogBodyText' style={{ font: '20px' }}>{language === 'uz' ? 'Sizning arizangiz muvaffaqiyatli yuborildi.' : 'Ваша заявка успешно отправлена.'}</h3>
                        <h3 className='DialogBodyText' style={{ color: '#28C79E' }}>{language === 'uz' ? <>Tez orada siz bilan bog'lanamiz</> : 'Мы свяжемся с вами в ближайшее время'}</h3>
                        <img className='DialogBodyImg' src="https://i.ibb.co/gPGdK61/Service-24-7-bro-1.png" alt="logo" />
                    </DialogContentText>
                </DialogContent>

            </Dialog>
        </div>
    );
}
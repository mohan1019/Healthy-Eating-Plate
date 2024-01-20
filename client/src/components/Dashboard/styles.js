import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    mainContainer: {
        maxWidth: 'inherit',
        background: 'white',
        height: '130vh',
        textAlign:'center',
        borderRadius: 30,
        border: '1px solid rgba(0,0,0, 0.2)',
        paddingTop: 20,
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
    }
}));

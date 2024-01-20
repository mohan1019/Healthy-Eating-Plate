import { makeStyles } from '@material-ui/core/styles';
<style>
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Poppins&family=Roboto+Slab&display=swap');
</style>
export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: '#000000',
        textDecoration: 'none',
        fontFamily:'cursive',
    },
    icon: {
        width: 70,
        height: 70,
        padding: 10,
        paddingLeft: 40
    },

}));
import {makeStyles} from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    header: {
        boxShadow: 'none',
        marginBlockStart: theme.spacing(3)
    },
    banner: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: "100% 100%",
        backgroundPosition: 'top, left',
        paddingBlockEnd: theme.spacing(10),
        [theme.breakpoints.down('md')]: {
            minHeight: '50vh',
            display: 'inline-flex',
            flexDirection: "column",
            justifyContent: 'center'
        },

    },
    bannerImg: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            maxWidth: '100%'
        },
        [theme.breakpoints.down('xs')]: {
            display:'none'
        },
    },
    generalTitle: {
        fontSize: theme.spacing(7),
        fontWeight: 'bold',
        lineHeight: '150%',
        [theme.breakpoints.down('md')]: {
            fontSize: '46px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '36px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '26px',
        },
    },
    generalSubTitle: {
        fontSize: theme.spacing(3),
    },
    stepsCards: {
        width: '100%',
        maxWidth: '1220px',
        margin: '0 auto'
    },
    spepsTitle: {
        textAlign: 'center',
        marginBlockStart: theme.spacing(24)
    },
    step: {
          width: '100%',
          textAlign: 'center',
        minHeight: '165px',
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'space-between'

    },
    stepInput: {
        border: '2px solid #276AFD',
        width: '233px',
        borderRadius: '10px',
        padding: '6px 0',
    },

    stepBtn: {
        backgroundColor: '#276AFD',
        width: '233px',
        padding: '12px 0',
        textTransform: "uppercase",
        boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.2)',
        borderRadius: '10px'
    },
    stepNumber: {
        color: '#276AFD',
        fontSize: '60px',
    },
    stepDescription: {
        fontSize: '20px',
        margin: '25px 0'
    },
    flex: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    block: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between"
    },
    phone: {
        padding: '144px 0 85px 0',
        background: 'linear-gradient(180deg, rgba(222, 241, 255, 0) 16%, rgba(122, 198, 255, 0.22) 48.59%, rgba(140, 206, 255, 0.383891) 57.84%, rgba(151, 210, 255, 0.482225) 66.2%, rgba(180, 222, 255, 0.321484) 87.78%, rgba(238, 247, 255, 0) 100.56%)'
    },
    phoneMobile: {
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'block'
        },
    },
    phoneMobileImgs: {
        display: 'flex'
    },
    phoneDesktop: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    },
    phoneTitle: {
        fontSize: '34px',
        fontWeight: 'bold'
    },
    phoneGoogleIcon: {
        position: 'relative',
        top: '5px',
        marginLeft: '6px'
    },
    phoneImgs: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'translateX(0)',
        transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms'
    },
    phoneImgsHide: {
        display: 'none',
        transform: 'translateX(-100%)',
        transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms'
    },
    phoneImg: {
        margin: '0 30px'
    },
    phoneImgLeft: {
        position: "relative"
    },
    phoneImgRight: {
        position: "relative"
    },
    phoneLeftArrow: {
        position: 'absolute',
        right: '-60px',
        top: '40%'
    },
    phoneRightArrow: {
        position: 'absolute',
        left: '-60px',
        top: '40%'
    },
    phoneHead: {
        textAlign: 'center',
        marginBlockEnd: '50px'
    },
    imgSize: {
        maxWidth: '100%',
        width: '100%'
    },
    btnSwitch: {
        display: 'block',
        textAlign: "center"
    }
}))
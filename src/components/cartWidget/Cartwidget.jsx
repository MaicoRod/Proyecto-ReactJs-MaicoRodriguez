import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';



const Cartwidget = () => {
    return (
        <Badge badgeContent={1} color="success">
            <AddShoppingCartIcon color="white" />
        </Badge>
    ) 
}

export default Cartwidget

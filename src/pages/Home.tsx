
import { Link as RouterLink } from 'react-router-dom'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Background from '../assets/images/background.jpg'

const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '530px',
        width: '100%',
        display: 'flex',
        marginBottom: '100px'
      }}
    >
      <Box
        sx={{
          height: '100%',
          width: '100%',
          backgroundColor: 'text.disabled',
          color: 'background.default',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >
          <Typography variant="h6" sx={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '20px' }}>
            Find Your Products
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: '40px',
              marginBottom: '20px',
              fontWeight: 'bold'
            }}
          >
            Red Shop
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 400, margin: '0px 20px 30px 20px', textAlign: 'center' }}>
            Welcome to Red Online Shop
          </Typography>
          <Button
            variant="outlined"
            component={RouterLink}
            to="/products"
            sx={{
              'fontWeight': 600,
              'padding': '12px 30px',
              'borderColor': 'background.default',
              'color': 'background.default',
              '&:hover': { color: '#2196f3' }
            }}
          >
            <span>Our Products</span>
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Home

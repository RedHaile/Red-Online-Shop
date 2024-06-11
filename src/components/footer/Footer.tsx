
import { memo } from 'react'

import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'


const media = [
 
  { link: 'https://github.com/RedHaile/', icon: FaGithub },
  { link: 'https://www.linkedin.com/in/redeat-h-5934b513a', icon: FaLinkedinIn }
]

const Footer = () => {
  return (
    <Box
      sx={{
        padding: '20px',
        textAlign: 'right',
        borderTop: '1px solid #ddd',
        bottom: '0',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
         alignItems: 'center'
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
        © 2024 -{' '}
        <Link
          href="https://github.com/RedHaile"
          target="_blank"
          rel="noreferrer"
          sx={{ 'textDecoration': 'none', 'listStyle': 'none', '&:hover': { color: '#255c99' } }}
        >
          Redeat Haile
        </Link>
      </Typography>
      <Box sx={{ marginTop: '20px' }}>
        {media.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            sx={{ 'fontSize': '26px', 'textDecoration': 'none', 'listStyle': 'none', '&:hover': { color: '#255c99' }, margin: '0 12px' }}
            color="text.primary"
          >
            <item.icon />
          </Link>
        ))}
      </Box>
    </Box>
  )
}

export default memo(Footer)

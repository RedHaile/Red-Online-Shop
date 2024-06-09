
import { memo } from 'react'

import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import { FaGithub } from 'react-icons/fa'
import { CenteredBox } from '../../styled-components/Box'

const media = [
 
  { link: 'https://github.com/RedHaile/', icon: FaGithub }

]

const Footer = () => {
  return (
    <Box
      sx={{
        padding: '20px',
        textAlign: 'center',
        borderTop: '1px solid #ddd',
        bottom: '0',
        width: '100%'
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
          Redeat Hail
        </Link>
      </Typography>
      <CenteredBox sx={{ marginTop: '20px' }}>
        {media.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            sx={{ 'fontSize': '26px', 'textDecoration': 'none', 'listStyle': 'none', '&:hover': { color: '#255c99' }, margin: '2px 12px' }}
            color="text.primary"
          >
            <item.icon />
          </Link>
        ))}
      </CenteredBox>
    </Box>
  )
}

export default memo(Footer)

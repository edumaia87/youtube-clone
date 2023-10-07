import { Box, Stack } from '@mui/material'

import { ChannelCard } from './ChannelCard'
import { VideoCard } from './VideoCard'
import { Loader } from './Loader'

export function Videos({ videos, direction }) {
  if (!videos?.length) return <Loader />

  return (
    <Stack
      direction={direction || 'row'}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

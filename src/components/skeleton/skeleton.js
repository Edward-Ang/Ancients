import { Box } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

export default function MainSkeleton() {
    const skeletons = Array.from({ length: 10 });

    return (
        <>
            <div className="main-wrapper">
                <div className='main-left'>
                    {skeletons.map((_, index) => (
                        <div key={index} className='news-card'>
                            <div className="img-container">
                                <Skeleton animation="wave" variant='rectangle' width={250} height={150} sx={{borderRadius: '8px'}} />
                            </div>
                            <div className="content-container">
                                <Box className='article-title' sx={{ width: 510 }}>
                                    <Skeleton />
                                    <Skeleton width={390} />
                                </Box>
                                <Box className='article-desc' sx={{ width: 510 }}>
                                    <Skeleton />
                                    <Skeleton />
                                    <Skeleton />
                                </Box>
                                <Skeleton className='article-date' width={100} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className='main-right'>
                    <div className="topic-wrapper">
                        <div className="topic-header">
                            <Skeleton className='topic-title' width={150} />
                        </div>
                        <div className="topic-container">
                            {skeletons.map((_, index) => (
                                <Skeleton key={index} variant='rectangle' height={75} sx={{borderRadius: '8px'}} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
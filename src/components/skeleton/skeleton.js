import { Box } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import styles from './skeleton.module.css';

export default function MainSkeleton() {
    const skeletons = Array.from({ length: 10 });

    return (
        <>
            <div className="main-wrapper" id={styles.wrapper}>
                <div className='main-left' id={styles.left}>
                    {skeletons.map((_, index) => (
                        <div key={index} className='news-card' id={styles.card}>
                            <div className="img-container" id={styles.imgContainer}>
                                <Box className='img-box' id={styles.imgBox}>
                                    <Skeleton animation="wave" variant='rectangle' height={150} sx={{ borderRadius: '8px', width: '250px' }} />
                                </Box>
                            </div>
                            <div className="content-container" id={styles.contentContainer}>
                                <Box className='article-title' id={styles.articleTitle} sx={{ width: 510 }}>
                                    <Skeleton />
                                    <Skeleton />
                                </Box>
                                <Box className='article-desc' id={styles.articleDesc} sx={{ width: 510 }}>
                                    <Skeleton />
                                    <Skeleton />
                                    <Skeleton />
                                </Box>
                                <Box id={styles.dateBox}>
                                    <Skeleton className='article-date' width={100} />
                                </Box>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='main-right' id={styles.right}>
                    <div className="topic-wrapper">
                        <div className="topic-header">
                            <Skeleton className='topic-title' width={150} />
                        </div>
                        <div className="topic-container">
                            {skeletons.map((_, index) => (
                                <Skeleton key={index} variant='rectangle' height={75} sx={{ borderRadius: '8px' }} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
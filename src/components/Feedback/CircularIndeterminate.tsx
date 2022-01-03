import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2)
      }
    }
  })
)

interface CircularIndeterminateProps {
    size: number | undefined
}

export default function CircularIndeterminate ({ size }: CircularIndeterminateProps) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {size ? <CircularProgress size={size}/> : <CircularProgress />}

    </div>
  )
}

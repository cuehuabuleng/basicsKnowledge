1. 挂载卸载过程
    constructor()
    componentWillMount()
    render()
    componentDidMount()
    componentWillUnmount ()
2. 更新过程
    componentWillReceiveProps (nextProps)
    shouldComponentUpdate(nextProps,nextState)
    componentWillUpdate (nextProps,nextState)
    render()
    componentDidUpdate(prevProps,prevState)
    
3. React新增的生命周期(个人补充)
    getDerivedStateFromProps(nextProps, prevState)
    getSnapshotBeforeUpdate(prevProps, prevState)

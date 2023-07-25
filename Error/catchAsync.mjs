const catchAsync = (controllerFn) =>{
    return async (req, res, next) =>{
        try{
            await controllerFn(req, res, next)
        }catch(e){
            next(e)
            console.log(e.stack)
        }
    }

}

export default catchAsync
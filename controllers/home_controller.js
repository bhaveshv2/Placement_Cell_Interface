//HomePage Controller if employee is authenticated then show homepage otherwise show sign-in page.

module.exports.home = function(req,res){
    if(req.isAuthenticated()){
        return res.render('home',{title:"Placements_Cell"});
    }

    return res.render('user_sign_in',{title:"SignIn"});
}
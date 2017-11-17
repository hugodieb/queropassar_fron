/*import AppApi from '~apijs'
import PerfilHelper from '~/components/PerfilHelper.js'


export default function (ctx) {
    return AppApi.whoami().then((response) => {
        if(response.data.authenticated){
            ctx.store.commit('SET_LOGGED_USER', response.data.user);
            var currentRoute = ctx.app.router.currentRoute;
            if(currentRoute.name != 'perfil' && !PerfilHelper.is_profile_complete(ctx.store)){
                var nextRoute = {
                    name: currentRoute.name,
                    params: currentRoute.params,
                    query: currentRoute.query,
                };
                ctx.store.commit('SET_NEXT_ROUTE', nextRoute);
                console.log(nextRoute)
                ctx.redirect('/perfil?next='+encodeURIComponent(JSON.stringify(nextRoute)));
            }
        } else {
            ctx.store.commit('SET_LOGGED_USER', null);
        }
    });
}
*/

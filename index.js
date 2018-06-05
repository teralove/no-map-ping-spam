module.exports = function NoMapPingSpam(dispatch) {
    
    const TimeBetweenPings = 5000; // ms
    let onCd = false;
    
    dispatch.hook('S_BATTLE_FIELD_MAP_ALARM', 1, (event) => {
        if (onCd) return false;
        onCd = true;
        setTimeout(()=>{ onCd = false; }, TimeBetweenPings);
    })
    
}

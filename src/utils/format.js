//将时间格式化


export function formatTime(begintime, lasttime) {
    let activity_time = new Date(begintime);
    let deadline = new Date(lasttime);

    let result = deadline - activity_time;
    if (result < 0) {
        this.$message.error("时间顺序出错了");
        this.resetForm(this.ruleForm);
    }
    let y = activity_time.getFullYear();
    let m = activity_time.getMonth() + 1
    m = m < 10 ? ('0' + m) : m
    let d = activity_time.getDate()
    d = d < 10 ? ('0' + d) : d
    activity_time = y + '-' + m + '-' + d;
    let y2 = deadline.getFullYear();
    let m2 = deadline.getMonth() + 1
    m2 = m2 < 10 ? ('0' + m2) : m2
    let d2 = deadline.getDate()
    d2 = d2 < 10 ? ('0' + d2) : d2
    deadline = y2 + '-' + m2 + '-' + d2;
    result=[activity_time, deadline, result];
    return result;
}


export function formatHeading(subject_heading) {
    let heading = '';
    for (let i = 0; i < subject_heading.length; i++) {
        heading = heading + subject_heading[i] + ',';
    }

    return heading;
}
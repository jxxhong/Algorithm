import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        String year = String.valueOf(LocalDate.now().getYear());
        String month = String.valueOf(LocalDate.now().getMonthValue());
        if(Integer.parseInt(month)<10){
            month = "0"+month;
        }
        String date = String.valueOf(LocalDate.now().getDayOfMonth());
        System.out.println(year+"-"+month+"-"+date);
    }
}
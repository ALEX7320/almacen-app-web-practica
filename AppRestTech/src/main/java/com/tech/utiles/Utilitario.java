package com.tech.utiles;

import java.util.Calendar;
import java.util.Date;

public class Utilitario {
	

	public Date masUnDia(Date date){

        Calendar cal = Calendar.getInstance();
        cal.setTime(date);
        cal.add(Calendar.DAY_OF_MONTH, 1);
                
        return cal.getTime();
	}

}

package edu.umkc.app;

import java.io.BufferedReader;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.ibm.json.java.JSON;
import com.ibm.json.java.JSONObject;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.WriteResult;

/**
 * Servlet implementation class UpdateDocument
 */
@WebServlet("/UpdateDocument")
public class UpdateDocument extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UpdateDocument() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setHeader("Access-Control-Allow-Methods", "POST");
		response.setHeader("Access-Control-Allow-Headers", "Content-Type");
		response.setHeader("Access-Control-Max-Age", "86400");
		
		StringBuilder buffer = new StringBuilder();
		BufferedReader reader = request.getReader();
		String line;
		
		while((line = reader.readLine())!= null){
		 
			buffer.append(line);
		}
		String data = buffer.toString();
		System.out.println("Data ::: " + data);		
		
		JSONObject params = (JSONObject)JSON.parse(data);
		BasicDBObject user1 = new BasicDBObject(params);
		
		//String name = (String) params.get("_id.$oid");
		//System.out.println(name);
		
		for (Object key : params.keySet().toArray()){
			user1.put(key.toString(), params.get(key));
		}
		
		MongoClientURI uri = new MongoClientURI("mongodb://root:root@ds039404.mongolab.com:39404/aselab");
		MongoClient client = new MongoClient(uri);
		
		DB db = client.getDB(uri.getDatabase());
		DBCollection users = db.getCollection("users");
		WriteResult result = users.insert(user1);		
		
		response.getWriter().write(result.toString());	
	}

}
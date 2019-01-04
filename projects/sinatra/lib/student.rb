class Student
    attr_reader :id
    attr_accessor :name, :email
    @@id = 1
    def initialize(name, email)  
        @id = @@id 
        @name = name
        @email = email
        # Increment ID by 1 every time an object is invoked from the 
        # class.
        @@id += 1
    end
end